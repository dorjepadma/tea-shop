// IMPORT MODULES under test here:
// import example from '../src/example.js';
import tea from '../tea shop/tea.js';
// import cart from '../tea shop/data/cart';
import { findById } from '../tea shop/common/utils.js';

const test = QUnit.test;

test('find tea by Id', (assert) => {

    const id = 'oolong';
    const expected = 'oolong';

    const foundTea = findById (tea, id);
    assert.ok(foundTea);
    assert.equal(foundTea.name, expected);
});

//     //Arrange
//     // Set up your parameters and expectations


//     //Act 
//     // Call the function you're testing and set the result to a const

//     //Assert
//     // Make assertions about what is expected valid result

// });
