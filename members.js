function skillMembers() {
    this.name = "Skill Members";
    this.id = "skill-members";
    this.members = [];
    this.addMember = function (member) {
        this.members.push(member);
    }
    this.removeMember = function (member) {
        this.members = this.members.filter(function (m) {
            return m !== member;
        })
    }
    this.getMembers = function () {
        return this.members;
    }
}