pipeline{
  agent any
  environment
  {
    rurl='waadhouij/microapp:latest'
    rcred='dockergit'
      
  }
  stages{
    stage('build'){
      steps{
        script{
          sh 'npm install'
     withCredentials([usernamePassword(credentialsId: RCRED_ID, usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                        
                        // Set Docker username and password from credentials
                        env.DOCKER_USERNAME = DOCKER_USERNAME
                        env.DOCKER_PASSWORD = DOCKER_PASSWORD

                        sh '''
                        # Construire l'image Docker
                        docker build -t $RURL .

                        # Se connecter à Docker Hub et pousser l'image
                        docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD
                        docker push $RURL
                        '''
                    }
                    }
        }
      }
    }
  }
}
