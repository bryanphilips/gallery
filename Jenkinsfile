pipeline{
    agent any
    // tools {  nodejs 'node'  }
    stages{

        
        stage ('Build'){
            //Build the app by installing the dependencies
            steps {
                git 'https://github.com/bryanphilips/gallery.git'
                bat 'npm install' 
            }

        }
    
        stage ('Serve the App'){
          steps {
                bat 'node server' 
            }
        }
         stage ('Test'){
            //Build the app by installing the dependencies
            steps {
                bat 'npm test' 
            }

        }
    
          
        }
}

