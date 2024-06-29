pipeline{
    agent any
    
    stages{
        stage ('Clonning gallery Master Branch'){
            steps{
                
           // git 'https://github.com/bryanphilips/gallery.git'
           checkout scmGit(branches: [[name: '*/master']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/bryanphilips/gallery.git']])
            }
          }
        stage ('Build'){
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
}
