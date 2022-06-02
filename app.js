class Sidebar extends React.Component{
    render(){
        return(
            <div>
                <ul>
                    <li>Dashboard</li>
                    <li>Widget</li>
                    <li>Reviews</li>
                    <li>Customers</li>
                    <li>Online Analysis</li>
                    <li>Settings</li>
                </ul>
            </div>
        )
    }
}
class Reviews extends React.Component{
    render(){
        return(
            <div>
                <p>Reviews</p>
                <h2>1,281</h2>
            </div>
        )
    }
}
class Avr extends React.Component{
    render(){
        return(
            <div>
                <p>Average Rating</p>
                <h2>4.6</h2>
            </div>
        )
    }
}
class Visitor extends React.Component{
    render(){
        return(
            <div>
                <p>Website Visitors</p>
                <h2>821</h2>
            </div>
        )
    }
}
class Sentiment extends React.Component{
    render(){
        return(
            <div>
                <p>Sentiment Analysis</p>
                <ul>
                    <li>960</li>
                    <li>122</li>
                    <li>321</li>
                </ul>
            </div>
        )
    }
}


class App extends React.Component{
    render(){
        return(
            <div className="grid">
                <div className="sidebar"><Sidebar /></div>
                <div className="content1"><Reviews /></div>
                <div className="content2"><Avr /></div>
                <div className="content3"><Sentiment /></div>
                <div className="main">
                    <Visitor />
                    <div className="mainbody">
                    </div>
                </div>

            </div>
        )
    }
}



ReactDOM.render(
    <App />,
    document.querySelector('.container')
);
