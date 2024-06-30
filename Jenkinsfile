pipeline{
    agent any
    //   tools {
    //     nodejs 'nodejs'
    //   }
    stages{

        stage ('Cloning Project '){
            steps{
                git 'https://github.com/bryanphilips/gallery.git'
                
            }
            
        }

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

