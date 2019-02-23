workflow "Deploy on master" {
  on = "push"
  resolves = [
    "Publish",
  ]
}

action "Master" {
  uses = "actions/bin/filter@24a566c2524e05ebedadef0a285f72dc9b631411"
  args = "branch master"
}

action "Add rsa key" {
  uses = "actions/bin/sh@24a566c2524e05ebedadef0a285f72dc9b631411"
  runs = "./bin/generate_rsa"
  secrets = ["KNOWN_HOSTS", "ID_RSA"]
  needs = ["Master"]
}

action "npm install" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "install"
  needs = ["Master"]
}

action "Generate" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "run generate"
  needs = ["npm install"]
}

action "Publish" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "run publish"
  needs = ["Add rsa key", "Generate"]
}
