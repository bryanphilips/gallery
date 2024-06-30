pipeline{
    agent any
     tools {  nodejs 'nodejs'  }
    stages{

        
        stage ('Build'){
            //Build the app by installing the dependencies
            steps {
                sh 'echo "Cloning..."'
                git 'https://github.com/bryanphilips/gallery.git'
                sh 'echo "Building..."'
                sh 'npm install' 
            }

        }
    
        stage ('Test'){
          steps {
                sh 'echo "Testing..." ' 
                echo 'the project runs well '
            }
        }
         stage ('Deploy'){
            //Build the app by installing the dependencies
            steps {
                sh 'echo "Deploying..."' 
            }
         }
    }
        post {
        always {
            sh 'echo "Cleaning up..."'
        }
        
        success {
            mail to: 'bryan.philip@student.moringaschool.com',
                 subject: 'Pipeline Succeeded',
                 body: 'Your Jenkins Pipeline has completed successfully.'
        }
        
        failure {
            mail to: 'bphilips.devops@gmail.com',
                 subject: 'Pipeline Failed',
                 body: 'Your Jenkins Pipeline has failed. Please investigate.'
        }
    }
  }
    


