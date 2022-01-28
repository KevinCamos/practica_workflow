
pipeline {
    agent any
        environment {
            RESULT_LINTER = "false"
            RESULT_CYPRESS = "false"
            RESULT_BADGE = "false"
            RESULT_DEPLOY = "false"
            TERM = 'xterm'
            NO_COLOR = '1'


        }   
        stages {
            stage('install') {
                steps {
                    script{
                    sh "npm install -y"
            
                    }
                }
            }
            stage('Linter_job') {
                steps {
                    script{
                        RESULT_LINTER = sh (script:"npm run lint", returnStatus: true)
                    }
                }
            }
            stage('Cypress_job') {
                steps {
                    script{ 
                        sh "npm run build"
                        sh "npm run start &"
                        RESULT_CYPRESS = sh (script:"cypress run --headed", returnStatus: true)

                    } 
                }
            }
             
            stage('Add_badge_job') {
                steps {
                    script{
                        sh "node ./jenkinscripts/badge.js $RESULT_CYPRESS"
                        sh "git config user.name KevinCamos"
                        sh "git config user.email kevincamossoto@gmail.com"
                        sh "git add ."
                        sh "git commit --allow-empty -m 'update readme' "
                        withCredentials([usernameColonPassword(credentialsId: 'dd4df5a6-38ac-4fb6-89e8-fa9da0d7ac5e', variable: 'USERPASS')]) {
                            sh "git remote set-url origin https://$USERPASS@github.com/KevinCamos/practica_workflow"
                        }
  
                        RESULT_BADGE = sh (script: "git push origin HEAD:jenkins" , returnStatus: true) 

                    }
                }
            
            } 
            stage('Send_email') {
                steps {
                    script{
                         withCredentials([
                            string(credentialsId: 'MY_MAIL', variable: '	MY_MAIL'),
                            string(credentialsId: 'KEY_MANDRIL', variable: 'KEY_MANDRIL')
                            
                            ]) { //set SECRET with the credential content
                              sh "node ./jenkinscripts/email.js $RESULT_LINTER $RESULT_CYPRESS $RESULT_BADGE $RESULT_DEPLOY $MY_MAIL $KEY_MANDRIL"      
                        }
                          
                    }      
                }
            }
            stage('Discord_Token') {
                steps {
                    script{
                         withCredentials([
                             string(credentialsId: 'TOKEN_DISCORD', variable: 'TOKEN_DISCORD'),
                             string(credentialsId: 'DISCROD_CHANNEL	', variable: 'DISCROD_CHANNEL')
                             
                             ]) { //set SECRET with the credential content
                                sh "node ./jenkinscripts/discord $TOKEN_DISCORD $DISCROD_CHANNEL" //Faltaran les credencials de mail                                      }
                          
                    }      
                      
                    }      
                }             
            }    
    }
}











