import _ from 'underscore';
import React from 'react';

var TicTacToe = React.createClass({
    getInitialState: function(){
        return {
            turn: undefined,
            fields: [
                true,
                undefined,
                undefined,
                undefined,
                undefined,
                false,
                undefined,
                undefined,
                undefined
            ]
        };
    },
    render: function(){
        var fields = this.state.fields.map(function(field, i){
            return (
                <div key={i} className={_.isUndefined(field) ? '' : field ? 'o' : 'x'}></div>    
            );
        });
        
        return (
            <div className='board'>{fields}</div>
        );
    }
});

module.exports = TicTacToe;