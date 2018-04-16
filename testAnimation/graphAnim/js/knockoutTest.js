var ViewModel = function(skills) {

    var self= this;
    self.skills= skills[];
    self.InfoSkills = ko.computed(function() {
        var info = self.skills().info;
        return info ? "$" + info.toFixed(2) : "None";        
    });
}