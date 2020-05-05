pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        build 'MavenApplication'
        build(job: 'ApartmentFrontend', wait: true)
      }
    }

  }
}