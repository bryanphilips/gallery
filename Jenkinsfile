pipeline{
    agent any
     tools {  nodejs 'nodejs'  }
    stages{        
         
        stage ('Npm Install and Test'){
          steps {
            
                 echo 'Building..'
                 sh 'npm install'
                //  echo 'Testing..'
                //  sh 'npm test'
                
            }
               
            
          
        }
         stage ('Build docker image'){
            
            steps {
                script {                    
                    sh 'docker build -t gallery/gallery-image .'
                    
                }

            }
         }
        //  stage('Run Docker image') {
        //     // environment {
        //     //     DOCKER_HOST_CREDENTIALS = credentials('gallery-docker')
        //     // }
        //     steps {
        //         script {
                    
                                                     
        //             sh 'docker run --name gallery -p 5000:5000/tcp -d gallery-image'
        //         }
        //     }
        // }
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
    


