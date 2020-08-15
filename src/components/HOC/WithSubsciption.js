import React, {useState, useEffect} from 'react'

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
    addChangeListener(callback){}
    removeChangeListener(callback){}
}

export function withSubscription(WrappedComponent, selectData){
    return (
        class extends React.Component {
            // eslint-disable-next-line no-useless-constructor
            constructor(props){
                super(props);
                this.dataSource = new DataSource();
                this.state = {
                    data: selectData(this.dataSource, props)
                }
            }
            componentDidMount(){
                this.dataSource.addChangeListener(this.handleChange)
            }
            componentWillMount(){
                this.dataSource.removeChangeListener(this.handleChange)
            }
            handleChange(){
                this.setState({data: selectData(this.dataSource, this.props)})
            }
            render(){
                return(
                    <WrappedComponent data={this.state.data}
                                        {...this.props}
                    >                        
                    </WrappedComponent>
                )
            }
        }
    )
}