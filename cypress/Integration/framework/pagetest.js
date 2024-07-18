import Link_po from "../../support/PageObject/orangehrm/link_po";
import Login_po from "../../support/PageObject/orangehrm/login";
import Logout_po from "../../support/PageObject/orangehrm/logoutPOM";

describe('', () => {

    const login_po = new Login_po();
    const link_po = new Link_po();
    const logout_po = new Logout_po();

    it('', () => {
        // Login
        login_po.EnterURL();
        login_po.Login();

        // Admin
        link_po.linkclick('Admin');

        // Logout
        logout_po.logout();

    });
});