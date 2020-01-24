
import tea from '../tea shop/tea.js';
// import cart from '../tea shop/data/cart';
import { findById, calcLineTotal, calcOrderTotal} from '../tea shop/common/utils.js';

const test = QUnit.test;

test('find tea by Id', assert => {

    const id = 'oolong';
    const expected = 'high mountain oolong';

    const foundTea = findById (tea, id);
    assert.ok(foundTea);
    assert.equal(foundTea.name, expected);
});

test('calculate line item', assert => {
    const quantity = 3;
    const Price = 4.00;
    const expected = 12.00;
    const total = calcLineTotal(quantity, Price);
    assert.equal(total, expected);
});

const 
//     //Arrange
//     // Set up your parameters and expectations


//     //Act 
//     // Call the function you're testing and set the result to a const

//     //Assert
//     // Make assertions about what is expected valid result

// });
