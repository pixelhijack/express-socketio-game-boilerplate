import _ from 'underscore';
import React from 'react';

var TicTacToe = React.createClass({
    getInitialState: function(){
        return {
            turn: 'x',
            fields: [
                true,
                undefined,
                undefined,
                false,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined
            ]
        };
    },
    render: function(){
        var fields = this.state.fields.forEach(function(field){
            var ticOrTac = _.isUndefined(field) ? '' : field ? 'o' : 'x';
            return (
                <div className={ticOrTac}></div>    
            );
        });
        
        return (
            <div className='board'>{fields}</div>
        );
    }
});

module.exports = TicTacToe;