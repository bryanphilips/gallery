pipeline{
    agent any
     tools {  nodejs 'nodejs'  }
    stages{        
         
        stage ('Test'){
          steps {
            
                 echo 'Building..'
                 sh 'npm install'
                 echo 'Testing..'
                 sh 'npm test'
                
            }
               
            
          
        }
         stage ('Build and Push docker image'){
            
            steps {
                sh 'echo "Deploying..."' 
                  script {                    
                    sh 'docker build ./gallery/ -t gallery-image:latest'
                    
                }

            }
         }
         stage('Deploy to docker') {
            environment {
                DOCKER_HOST_CREDENTIALS = credentials('gallery-docker')
            }
            steps {
                script {
                    
                    sh 'docker stop gallery-image'
                    sh 'docker rm gallery-image'                                     
                    sh 'docker run --name gallery -p 5000:5000/tcp -d gallery-image'
                }
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
    


