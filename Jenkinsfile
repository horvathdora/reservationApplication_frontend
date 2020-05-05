pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        build(job: 'MavenApplication', wait: true)
        build(job: 'ApartmentFrontend', wait: true)
      }
    }

  }
}