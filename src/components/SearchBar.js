import React, { useState } from 'react';

const SearchBar = ({ onTermSubmit }) => {
    const [ term, setTerm ] = useState('');

    const onInputChange = (e) => {
        setTerm(e.target.value);
    };

    const onFormSubmit = (e) => {
        e.preventDefault();

        //To do - Make sure to call callback from parent component
        onTermSubmit(term);
    }

    return (
        <div className="search-bar ui segment">
            <form onSubmit={onFormSubmit} className="ui form">
                <div className="field">
                    <label>Video Search</label>
                    <input type="text" onChange={onInputChange} value={term}></input>
                </div>
            </form>
        </div>
    );
};


// Class based component syntax of SearchBar
// class SearchBar extends React.Component{
//     state={term: ''};
    
//     onInputChange = (event) => {
//         this.setState({ term: event.target.value });
//     };

//     onFormSubmit = (e) => {
//         e.preventDefault();

//         //To do - Make sure to call callback from parent component
//         this.props.onTermSubmit(this.state.term)
//     }

//     render(){
//         return(
//             <div className="search-bar ui segment">
//                 <form onSubmit={this.onFormSubmit} className="ui form">
//                     <div className="field">
//                         <label>Video Search</label>
//                         <input type="text" onChange={this.onInputChange} value={this.state.term}></input>
//                     </div>
//                 </form>
//             </div>
//         );
//     };
// }

export default SearchBar;