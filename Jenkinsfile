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
      docker.build(RURL)

                    // Taguer l'image
                    docker.image(RURL).push(RCRED)

                    // Poussez l'image vers Docker Hub
                    docker.withRegistry('https://registry.hub.docker.com', RCRED) {
                        docker.image(RURL).push()
                    }
        }
      }
    }
  }
}
