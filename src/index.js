import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Neo4jGraphRenderer from 'Neo4jGraphRenderer';
//onClick={(node)=>console.log(node.propertyMap)}/>
const App = () => (
  <div>
    <Neo4jGraphRenderer url="http://172.20.14.22:7484" user="neo4j" password="neo4j"
                        query="MATCH (n)-[r]->(m) RETURN n,r,m limit 10"
                        onClickHandler={(node)=>node.propertyMap}/>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();