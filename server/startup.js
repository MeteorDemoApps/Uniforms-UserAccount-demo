import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
    if (Meteor.users.find().count() == 0) {
        Accounts.createUser({
            username: "Admin",
            email: "admin@meteorDemoApps.com",
            password: "123"
        });
    }
});
