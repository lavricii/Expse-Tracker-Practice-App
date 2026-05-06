import { View } from "react-native"
import ExpensesSummary from "./ExpensesSummary"
import ExpensesList from "./ExpensesList"


function ExpensesOutput({expenses, expensesPeriod}){
    return (
        <View>
            <ExpensesSummary periodName={expenses} expenses={expensesPeriod } />
            <ExpensesList />
        </View>
    )
}

export default ExpensesOutput