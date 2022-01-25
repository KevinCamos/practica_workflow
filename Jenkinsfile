
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
        RESULT = "false"
    //     STAGE2 = "false"
    }   
    stages {
   
        stage('Linter_job') {
            steps {
                script{
                  sh "npm install && npm run lint"
             }
            }
        }
        stage('Cypress_job') {
            steps {
              script{
                RESULT = sh (script:"cypress run --config-file cypress.json", returnStdout: true).trim()

              } 
            }
        }
        stage('Cypress_job') {
            steps {
               echo ="$RESULT"

              
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
