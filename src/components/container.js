import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import { connect } from 'react-redux';
import {latestData, singleBlock, singleTransaction} from '../redux/actions';

import Navigation from './nav';
import Dataloader from './dataloader';


class Container extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
         this.nav = [
            {
                value : "Single Block",
                link: "singleblock" 
            },
            {
                value : "Single Transaction",
                link: "singletransaction" 
            },
            {
                value : "Latest Block",
                link: "latestblock" 
            },
         ]
         console.log(singleBlock)
    }
    componentDidMount() {
        this.props.dispatch(latestData());
        this.props.dispatch(singleBlock());
        this.props.dispatch(singleTransaction())
    }
    render() { 
     
        return ( 
            <BrowserRouter>
                <div className="wrapper">
                    <div className="header">
                        <div className="header-logo">
                            Block Chain
                        </div>
                        <div className="header-right">
                            <Navigation list={this.nav }></Navigation>
                        </div>
                    </div>
                        <div className="contentArea">
                                <Switch>
                                    <Route path="/" exact>
                                        <Dataloader title="Latest Block" data={this.props.latestData}></Dataloader>
                                    </Route>
                                    <Route path="/singleblock" >
                                        <Dataloader title="Single Block" data={this.props.singleBlockData}></Dataloader>
                                    </Route>
                                    <Route path="/singletransaction" >
                                        <Dataloader title="Single Transaction" data={this.props.singleTransactionData}></Dataloader>
                                    </Route>
                                    <Route path="/latestblock" exact>
                                        <Dataloader title="Latest Block" data={this.props.latestData}></Dataloader>
                                    </Route>
                                </Switch>
                        </div>
                </div>
            </BrowserRouter>
            );
    }
}



function mapStateToprops(state){
    return{
        latestData: state.getData.latestdata,
        singleBlockData : state.getData.singleBlockData,
        singleTransactionData : state.getData.singleTransaction
    }
}
export default connect(mapStateToprops)(Container);