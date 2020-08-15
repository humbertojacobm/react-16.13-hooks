import React, {useState, useEffect} from 'react'
import Comment from './Comment'

const comments = [
    {id: 1, message:"message01"},
    {id: 2, message:"message02"},
    {id: 3, message:"message03"},
]

class DataSource{
    getComments(){
        return comments;
    }
    addChangeListener(callback){

    }
    removeChangeListener(callback){

    }

}

class CommentList extends React.Component{
    
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props); 
        this.dataSource = new DataSource();
        this.state = {
            comments: this.dataSource.getComments()
        }       
    }
    componentDidMount(){
        this.dataSource.addChangeListener(this.handleChange)
    }
    componentWillMount(){
        this.dataSource.removeChangeListener(this.handleChange)
    }
    handleChange(){
        this.setState({comments: this.dataSource.getComments()})
    }
    render(){
        return(
            <div>
                {                    
                    this.state.comments.map( (comment)=>{
                        //{id: 1, message:"message01"}
                       return (
                           <Comment comment={comment} key={comment.id}></Comment>
                       ) 
                    })
                }
            </div>
        )
    }
}

export default CommentList;