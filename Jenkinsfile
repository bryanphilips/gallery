pipeline{
    agent any
     tools {  nodejs 'nodejs'  }
    stages{        
         
        stage ('Npm Install and Test'){
          steps {
            
                 echo 'Building..'
                 sh 'npm install'
                //  echo 'Funding..'
                //  sh 'npm fund'
                
            }
               
                     
        }
        //  stage ('Build and tag docker image'){
            
        //     steps {
        //         script {                    
        //             sh 'docker build -t gallery-image .' 
        //             sh 'docker tag gallery-image:latest p801/galleryapp:v2.0'
                    
        //         }

        //     }
        //  }
        //  stage('Push Build Docker image format') {
        //      {
        //         script {
                                                                         
        //             sh 'docker push p801/galleryapp:v2.0'
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
    

