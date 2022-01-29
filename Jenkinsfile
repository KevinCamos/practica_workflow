
pipeline {
    agent any
        triggers {
            pollSCM('H */2 * * *')
     } 
        parameters {
            string(name: 'EJECUTOR', defaultValue: 'Kevin', description: 'Ejecutor: de tipo texto en el que se especificará el nombre de la persona que ejecuta la pipeline')
            string(name: 'MOTIVO', defaultValue: 'DAW', description: 'Motivo: de tipo texto también en que podremos especificar el motivo por el cual estamos ejecutando la pipeline.')
            string(name: 'MAIL', defaultValue: 'ejemplo@gmail.com', description: 'Correo notificación: de tipo texto que almacenará el correo al que notificaremos el resultado de cada stage ejecutado')
            booleanParam(name: 'COMMITPIPELINE', defaultValue: false, description: 'Esta variable es para determinar si quieres realizar un commit al ejecutar el pipeline y no entrar en un bucle de commits a causa del trigger') 

        }
        environment {
            RESULT_LINTER = "false"
            RESULT_CYPRESS = "false"
            RESULT_BADGE = "false"
            RESULT_VERCEL = "false"
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
          
        stage('Git_commit') {
            steps {
                    script{
                if ("${params.COMMITPIPELINE}" == true) {
                        sh "node ./jenkinscripts/badge.js $RESULT_CYPRESS"
                        sh "git config user.name KevinCamos"
                        sh "git config user.email kevincamossoto@gmail.com"
                        sh "git add README.md"
                        sh "git commit --allow-empty -m 'Pipeline ejecutada por ${params.EJECUTOR}. Motivo: ${params.MOTIVO}' "
                        withCredentials([usernameColonPassword(credentialsId: 'dd4df5a6-38ac-4fb6-89e8-fa9da0d7ac5e', variable: 'USERPASS')]) {
                            sh "git remote set-url origin https://$USERPASS@github.com/KevinCamos/practica_workflow"
                        }

                        RESULT_BADGE = sh (script: "git push origin HEAD:jenkins" , returnStatus: true) 
                    } else {
                        echo 'Esta ejecución debe haberla realizado un trigger'
                    }

                }
            }

        } 
        stage('Vercel') {
            steps {
                script{
                    withCredentials([
                    string(credentialsId: 'VERCEL_TOKEN', variable: 'VERCEL_TOKEN'),
                    string(credentialsId: 'ORG_ID', variable: 'ORG_ID'),
                    string(credentialsId: 'PROJECT_ID	', variable: 'PROJECT_ID')
                    
                    ]) { 
                      RESULT_VERCEL = sh (script:"vercel --env KEY1=$ORG_ID --env KEY2=$PROJECT_ID --token $VERCEL_TOKEN", returnStatus: true)
                    }      
                      
                }      
            }             
        }      
        stage('Parallel In Sequential') {
            parallel {
                  stage('Send_email') {
                    steps {
                        script{
                                withCredentials([
                                string(credentialsId: 'MY_MAIL', variable: 'MY_MAIL'),
                                string(credentialsId: 'KEY_MANDRIL', variable: 'KEY_MANDRIL')
                                ]) { //set SECRET with the credential content
                                    sh "node ./jenkinscripts/email.js $RESULT_LINTER $RESULT_CYPRESS $RESULT_BADGE $RESULT_VERCEL ${params.MAIL} $KEY_MANDRIL"      
                            }
                                
                        }      
                    }
                }
                stage('Discord Message') {
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
    }

}











