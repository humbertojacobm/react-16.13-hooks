// eslint-disable-next-line no-unused-vars
import React, {useSate, useEffect} from 'react';
import TextBlock from './TextBlock'
import { withSubscription } from './WithSubsciption';

const blogPosts = [
    {id: 1, message:"message01"},
    {id: 2, message:"message02"},
    {id: 3, message:"message03"}
]

class DataSource{
    getBlogPost(id){
        debugger;
        return blogPosts.filter(item => item.id === Number(id))[0];
    }
    addChangeListener(callback){

    }
    removeChangeListener(callback){

    }
}

//props.id
class BlogPost extends React.Component{
    // eslint-disable-next-line no-useless-constructor    
    constructor(props){
        super(props);
        this.dataSource = new DataSource();
        this.state ={
            blogPost: this.dataSource.getBlogPost(props.id)
        }
    }
    componentDidMount(){
        this.dataSource.addChangeListener(this.handleChange);
    }
    componentWillUnmount(){
        this.dataSource.removeChangeListener(this.handleChange);
    }
    handleChange(){
        this.state({
            blogPost: this.dataSource.getBlogPost(this.props.id)
        })
    }
    render(){

        return(
            <TextBlock text={this.state.blogPost}/>
        )
    }
}


function BlogPostContainer(props){    
    const BlogPostWithSubscription = withSubscription(BlogPost, (source,props)=> {
        debugger; 
        return source.getBlogPost(props.id);
    });
    return BlogPostWithSubscription;
}

export default BlogPostContainer;

