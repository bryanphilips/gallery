pipeline{
    agent any
     tools {  nodejs 'nodejs'  }
    stages{        
         stage('Checkout Master branch'){
            steps{
                checkout scm:[$class:'GitSCM', branches:[[name: '*/master']], userRemoteConfigs:'git-cridentials']
       
            }
              }

         stage ('Build'){
          steps {
            
                 echo 'Building..'
                 sh 'npm install'
                 
                
            }}
         stage('Test'){
            steps{
                echo 'Testing..'
                 sh 'npm test'
            }}
         stage('Deploy to Render'){
            steps{
                echo 'Deploying via webhook' 
                // https://github.com/bryanphilips/gallery/tree/master
    //            withCredentials([usernameColonPassword(credentialsId: 'render-auth', variable: 'RENDER_CREDENTIALS' )]){
    //   sh 'git push https://${RENDER_CREDENTIALS}@render.com/bryanphilips/gallery master'
    }

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
            sh 'echo "Notify build results by email'
        }
          
                
        success {
             script{
                slackSend ("message:${currentBuild.result} build ${env.BUILD_NUMBER} url (<${env.BUILD_URL}|Open>)")
            }
            
            mail to: 'bryan.philip@student.moringaschool.com',
                 subject: "SUCCESS:${currentBuild.fullDisplayName}",
                 body: "${currentBuild.result} Job ${env.JOB_NAME} build ${env.BUILD_NUMBER}"

            
        }
        
        failure {
            script{
                slackSend ("message:${currentBuild.result} build ${env.BUILD_NUMBER} url (<${env.BUILD_URL}|Open>)")
            }
            
            mail to: 'bryan.philip@student.moringaschool.com',
                 subject: "FAILURE: ${currentBuild.fullDisplayName}",
                 body: "${currentBuild.result} Job ${env.JOB_NAME} build ${env.BUILD_NUMBER}"
            
        }
    }
  
    

