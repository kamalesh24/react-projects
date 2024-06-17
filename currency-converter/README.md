# Currency Converter : React + TailwindCSS

### Project preview
![Project Preview](./public/project-screenshot.png)

### Key components of the project

**1. Created a custom hook - _useCurrencyInfo_:**

The values of the currencies are _fetched_ using the api URL: 
https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json

* Replace _{currency}_ with the currency-type data you want to obtain _like_, for "usd", "inr", etc.

>_** visit_ [**fawazahmed0/exchange-api**](https://github.com/fawazahmed0/exchange-api): to follow up on any recent updates in the API.

**2. InputBox component:**

An input box contains **input field** (_range_ tag) to provide amount value, and a **select field** (_select_ tag) to select currency-type.

There are _two types_ of input boxes:

* **From**: to get the value of _from_ currency-type.
* **To**: to display the value after conversion to the _to_ currency-type.


**Conversion**:

`resultantAmount = amount * currencyInfo[to]`

* _currencyInfo_ is fetched from API request. It consists of all the currency conversion values of the **"from"** currency-type.

* _currencyInfo[to]_ gives the conversion value for the **"to"** currency-type.

### 3. Swap functionality:

To swap the _currency-types_ and the _amount_ given in the _two_ **InputBox** fields.
