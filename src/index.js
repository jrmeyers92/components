import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from "./ApprovalCard"

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div className="">
                    <h4>Warning!</h4>
                    are you sure you want to do this?
                </div>
            </ApprovalCard>

              <ApprovalCard >
                <CommentDetail author="Sam" post="sick post brah!" timeAgo="today at 4:45PM" avatar = {faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Alex" post="far out maane" timeAgo="today at 2:22PM" avatar = {faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Jane" post="so dope" timeAgo="yeseterday" avatar = {faker.image.avatar()}/>
            </ApprovalCard>
          
            
        </div>
    )
    

};

ReactDOM.render(<App />, document.querySelector('#root'));

