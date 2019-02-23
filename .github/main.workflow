workflow "New workflow" {
  on = "push"
  resolves = [
    "Publish",
  ]
}

action "Only master branch" {
  uses = "actions/bin/filter@24a566c2524e05ebedadef0a285f72dc9b631411"
  runs = "ls"
}

action "npm install" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "install"
  needs = ["Only master branch"]
}

action "Publish" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "run deploy"
  secrets = ["GITHUB_TOKEN"]
  needs = ["npm install"]
}
