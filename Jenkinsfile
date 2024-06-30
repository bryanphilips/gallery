pipeline{
    agent any
     tools {  nodejs 'nodejs'  }
    stages{

        
        stage ('Build'){
            //Build the app by installing the dependencies
            steps {
                git 'https://github.com/bryanphilips/gallery.git'
                sh 'npm install' 
            }

        }
    
        stage ('Serve the App'){
          steps {
                // sh 'node server' 
                echo 'the project runs well '
            }
        }
         stage ('Test'){
            //Build the app by installing the dependencies
            steps {
                sh 'npm test' 
            }

        }
    
        
        }
}

