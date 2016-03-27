#!/usr/bin/env node

/**
 * Adapted from AngularJS's contribution guidelines validation script
 * Source: https://github.com/angular/angular.js/blob/master/validate-commit-msg.js
 *
 * github/erikras contribution guidelines
 * Source: https://github.com/erikras/react-redux-universal-hot-example/blob/master/CONTRIBUTING.md
 */

/**
  * Git COMMIT-MSG hook for validating commit message
  * See https://docs.google.com/document/d/1rk04jEuGfk9kYzfqCuOlPTSJw3hEDZJTBN5E5f1SALo/edit
  *
  * Installation:
  * >> cd <angular-repo>
  * >> ln -s ../../validate-commit-msg.js .git/hooks/commit-msg
 */

'use strict'

const fs = require('fs')
const util = require('util')

const MAX_LENGTH = 100
const PATTERN = /^(?:fixup!\s*)?(?:(:\w*:)|(\w*)) ([\w\$\.\*/-]*)\: (.*)$/
const IGNORED = /^WIP\:/
const TYPES = {
    feat    : true,
    fix     : true,
    docs    : true,
    style   : true,
    refactor: true,
    test    : true,
    chore   : true,
}
const EMOJIS = [
    ':seedling:',
    ':wrench:',
    ':books:',
    ':lipstick:',
    ':scissors:',
    ':vertical_traffic_light:',
    ':unamused:',
]
const EMOJIMAP = [
    [ /^feat/    , EMOJIS[ 0 ] ],
    [ /^fix/     , EMOJIS[ 1 ] ],
    [ /^docs/    , EMOJIS[ 2 ] ],
    [ /^style/   , EMOJIS[ 3 ] ],
    [ /^refactor/, EMOJIS[ 4 ] ],
    [ /^test/    , EMOJIS[ 5 ] ],
    [ /^chore/   , EMOJIS[ 6 ] ]
]

const error = function() {
    // gitx does not display it
    // http://gitx.lighthouseapp.com/projects/17830/tickets/294-feature-display-hook-error-message-when-hook-fails
    // https://groups.google.com/group/gitx/browse_thread/thread/a03bcab60844b812
    throw new Error( 'INVALID COMMIT MSG: ' + util.format.apply( null, arguments ) )
}

const validateMessage = function( message ) {
    if ( IGNORED.test( message ) ) {
        console.info( 'Commit message validation ignored.' )
        return true
    }

    if ( message.length > MAX_LENGTH ) {
        error( 'is longer than %d characters !', MAX_LENGTH )
        return false
    }

    const match = PATTERN.exec( message )

    if ( ! match ) {
        error( 'does not match "<type> <scope>: <subject>" ! was: ' + message )
        return false
    }

    const emoji   = match[ 1 ]
    const type    = match[ 2 ]
    const scope   = match[ 3 ]
    const subject = match[ 4 ]

    if ( ! TYPES.hasOwnProperty( type ) && EMOJIS.indexOf( emoji ) === -1 ) {
        error( '"%s" is not allowed type !', type || emoji )
        return false
    }

    // TODO:
    // - auto correct the type to lower case
    // - auto correct first letter of the subject to lower case
    // - allow emojis so rebasing doesn't require rewriting

    // Some more ideas:
    // - allow only specific scopes (eg. fix(docs) should not be allowed ?
    // - auto add empty line after subject ?
    // - auto remove empty () ?
    // - auto correct typos in type ?

    return true
}

const firstLineFromBuffer = function( buffer ) {
    return buffer.toString().split( '\n' ).shift()
}

const giveEmojiToMsg = function( msg ) {
    for ( const replacement of EMOJIMAP ) {
        const r = replacement[ 0 ]
        if ( r.test( msg ) ) {
            return {
                msg:      msg.replace( r, replacement[ 1 ] ),
                replaced: true,
            }
        }
    }
    return {
        msg,
        replaced: false,
    }
}

// publish for testing
exports.validateMessage = validateMessage

const commitMsgFile = '.git/COMMIT_EDITMSG'
const incorrectLogFile = commitMsgFile.replace( 'COMMIT_EDITMSG', 'logs/incorrect-commit-msgs' )

fs.readFile( commitMsgFile, ( err, buffer ) => {
    const msg = firstLineFromBuffer( buffer )

    if ( ! validateMessage( msg ) ) {
        fs.appendFile( incorrectLogFile, msg + '\n', () => {
            process.exit( 1 )
        })
    } else {
        const emojified = giveEmojiToMsg( buffer.toString() )
        if ( emojified.replaced ) fs.writeFileSync( commitMsgFile, emojified.msg )
        process.exit( 0 )
    }
})
