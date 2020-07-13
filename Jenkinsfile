pipeline {
    agent any

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
                sh 'cd edudy-template && yarn'
            }
        }
    }
    stage('Test') {
        steps {
            nodejs('nodejs') {
                sh 'cd edudy-template && yarn test'
            }
        }
    }
    stage('Deploy') {
        steps {
            echo 'Deploying'
        }
    }
}