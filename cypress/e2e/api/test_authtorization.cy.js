describe('E2E Test API Demoblaze Authorization', ()=>{
    const apiURL = 'https://api.demoblaze.com';

    const userTested = {
        userName :'csalgado123',
        password : '123456'
    };

    //Create new user
    it('Test 1: Create new user', () => {
        cy.request({
            method:'POST',
            url: `${apiURL}/signup`,
            body: userTested,
            failOnsStatusCode: false
        }).then((response)=>{
            expect(response.status).to.eq(200);
            if (response.body && response.body.errorMessage) {
      expect(response.body.errorMessage).to.be.a('string');
    } else {
      expect(response.body).to.be.oneOf([{}, ""]);
    }
        })
    });

    //Try to create an user already exist
    it('Test 2: Create user that already exist', () => {
        cy.request({
            method: 'POST',
            url: `${apiURL}/signup`,
            body: userTested,
            failOnsStatusCode: false
        }).then((response)=>{
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('errorMessage');            
        })
    });

    //Try to login with correct user and password
    it('Test 3: Login successfully', () => {
       cy.request({
        method: 'POST',
        url: `${apiURL}/login`,
        body: userTested,
        failOnsStatusCode: false
       }).then((response)=>{
        expect(response.status).to.eq(200);
       })
    });

    //Try to login with incorrect user 
    it('Test 4: Login Failed with Wrong password', () => {
        cy.request({
            method: 'POST', 
            url: `${apiURL}/login`,
            body:{
                userName: userTested.userName,
                password: ''
            },
            failOnsStatusCode: false
        }).then((response)=>{
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('errorMessage');
        })
    });

    //Try to login with incorrect password 
    it('Test 5: Login Failed with wrong userName', () => {
        cy.request({
            method: 'POST', 
            url: `${apiURL}/login`,
            body:{
                userName: 'prueba',
                password: userTested.password
            },
            failOnsStatusCode: false
        }).then((response)=>{
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('errorMessage');
        })
    });

        //Try to login with incorrect user and password 
    it('Test 6: Login Failed Wrong userName and Password', () => {
        cy.request({
            method: 'POST', 
            url: `${apiURL}/login`,
            body:{
                userName: 'prueba',
                password: 'error'
            },
            failOnsStatusCode: false
        }).then((response)=>{
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('errorMessage');
        })
    });

    

})