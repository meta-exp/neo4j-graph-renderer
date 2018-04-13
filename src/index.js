import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Neo4jGraphRenderer from 'Neo4jGraphRenderer';

const App = () => (
	<div>
		<Neo4jGraphRenderer url="http://localhost:7494" user="neo4j" password=""
							query="MATCH (n)-[r]->(m) RETURN n,r,m limit 10"
							onClick={(node) => console.log(node)} />
	</div>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();