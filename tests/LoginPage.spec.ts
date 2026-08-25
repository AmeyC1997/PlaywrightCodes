
import { Locator, Page ,test} from "@playwright/test";

export class LoginPage {

  //Locators
     readonly page:Page;
     readonly usernameInput:Locator;
     readonly passwprdInput:Locator;
     readonly loginButton:Locator;
    

  //Intialization
     constructor(page:Page)
     {
         this.page =page;
         this.usernameInput=page.getByPlaceholder('Username');
         this.passwprdInput =page.getByPlaceholder('Password');
         this.loginButton =page.getByRole('button',{name:'Login',exact:true});
     }
     // async Resuable Methods
     async navigateTOLoginPage(){
       
      await this.page.goto('https://www.saucedemo.com/');
     } 
     


     async enterUserName(userName:string)
     {
      await this.usernameInput.fill(userName);
     }
       
     async enterPassword(password:string)
     {
      await this.passwprdInput.fill(password);
     }

     async clickLogin()
     {
      await  this.loginButton.click();
     }

     async Login(userName:string,password:string)
     {
       await this.usernameInput.fill(userName);
       await this.passwprdInput.fill(password);
       await this.loginButton.click();

     }

    }

    test('Login with Valid Credentials', async ({ page }) => {
      let loginPageObj = new LoginPage(page);
      await  loginPageObj.navigateTOLoginPage();
      await  loginPageObj.Login('standard_user','secret_sauce');
       //verify loginpage is displayed or not
      

       type MyFixtures = {
  myCustomFixture: string;
};


    });
    
    




        

