workflow "Deploy on master" {
  on = "push"
  resolves = [
    "Publish",
    "Check git config",
  ]
}

action "Add rsa key" {
  uses = "actions/bin/sh@24a566c2524e05ebedadef0a285f72dc9b631411"
  runs = "./bin/generate_rsa"
  secrets = ["KNOWN_HOSTS", "ID_RSA"]
}

action "Check git config" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  runs = "ssh"
  args = "-T git@github.com"
  needs = ["Add rsa key"]
}

action "Master" {
  uses = "actions/bin/filter@24a566c2524e05ebedadef0a285f72dc9b631411"
  runs = "ls"

  # args = "branch master"
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
  args = "run deploy"
  secrets = ["GITHUB_TOKEN"]
  needs = ["Add rsa key", "Generate"]
}
