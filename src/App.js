import React,{useState} from 'react';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Search from './components/Search';
import Accordion from './components/Accordion';
import Route from './components/Route';
import Header from './components/Header';

const items = [
    {
        title: 'What is React?',
        content: 'React is a front end Javascript framework'
    },
    {
        title: 'Why use React?',
        content:'React is a favourite JS library among Engineers'
    },
    {
        title: 'How do you use react?',
        content: 'You use react by creating components'
    }
];

const options = [
    {
        label: 'The color of red',
        value: 'red'
    },
    {
        label:'The color of green',
        value:'green'
    },
    {
        label: 'A Shade of blue',
        value: 'blue'
    }
];



export default () => {
    const [selected,setSelected] = useState(options[0]);

    return (
        <div>
            <Header />

            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown 
                label="Select a color"
                options={options}
                selected={selected}
                onSelectedChange={setSelected}
                />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>
   )
};

