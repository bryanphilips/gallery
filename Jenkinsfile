pipeline{
    agent any
      
    stages{

        stage ('Build'){
            //Build the app by installing the dependencies
            steps {
                sh 'npm install' 
            }

        }
    
        stage ('Serve the App'){
          steps {
                sh 'node server' 
            }
        }
          
        }
}

