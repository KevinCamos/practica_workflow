
pipeline {
    agent any

    // triggers {
    
    //     pollSCM(' H/5 * * * * ')
    // } 
    // parameters {
    //     string(name: 'nombrepersona', defaultValue: 'John', description: 'Nombre')
    //     string(name: 'apellido', defaultValue: 'Doe', description: 'Apellido')
    // }
    environment {
        RESULT_LINTER = "false"
        RESULT_CYPRESS = "false"
        RESULT_BADGE = "false"
        RESULT_DEPLOY = "false"
    //     STAGE2 = "false"
    }   
    stages {
   
        stage('Linter_job') {
            steps {
                script{
                    RESULT_LINTER = sh (script:"npm install && npm run lint", returnStdout: true).trim()
             }
            }
        }
        stage('Cypress_job') {
            steps {
                script{
                    RESULT_CYPRESS = sh (script:"npx cypress run --config-file cypress.json", returnStdout: true).trim()

              } 
            }
        }
        stage('Echo') {
            steps {
               echo "$RESULT_LINTER"
               echo "$RESULT_CYPRESS"

              
            }

        stage('Add_badge_job') {
            steps {
                script{
                    sh "node ./jenkinscripts/badge.js $RESULT_CYPRESS"
                    git config user.name KevinCamos
                    git config user.email kevincamossoto@gmail.com
                    git pull 
                    git add .
                    git commit --allow-empty -m "update readme"
                   
                    RESULT_BADGE = sh (script: "git push" , returnStdout: true).trim()    

            }
        }
        stage('Add_badge_job') {
            steps {
                script{
                    sh "node ./jenkinscripts/badge.js $RESULT_CYPRESS"
                    git config user.name KevinCamos
                    git config user.email kevincamossoto@gmail.com
                    git pull 
                    git add .
                    git commit --allow-empty -m "update readme"
                   
                    RESULT_BADGE = sh (script: "git push" , returnStdout: true).trim()    

            }
        }


        // stage('Linter_job') {
        //     steps {
        //         script{
        //             sh "npm install && npm run lint"
        //         }
        //     } 
        // }
        //  stage('Stage3') {
        //     steps {
        //          script {
        //            echo "$STAGE1"
        //            echo "$STAGE2"

        //             if ("$STAGE1" == "true" &&  "$STAGE2" =="true") {
        //                 echo 'El proyecto va en popa a toda vela'
        //             } else if ("$STAGE1" == "true" ||  "$STAGE2" == "true"){
        //                 echo 'Va, al estil de Thanos, al 50%'
        //             }else{
        //                 echo 'Açò no va ni a tirs, tio'
        //             }
        //         }
        //     }            
        // }
    }       
}
