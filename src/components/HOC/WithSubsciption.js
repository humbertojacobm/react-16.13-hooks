import React, {useState, useEffect} from 'react'

class DataSource{
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