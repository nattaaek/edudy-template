pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                nodejs('nodejs'){
                    checkout scm
                }
            }
        }
        stage('Build') {
            steps {
                nodejs('nodejs') {
                    sh 'yarn'
                }
            }
        }
        stage('Test') {
            steps {
                nodejs('nodejs') {
                    sh 'yarn test'
                }
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying'
            }
        }
    }
}