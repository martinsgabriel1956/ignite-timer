import { ReactNode, useReducer, useState } from 'react'
import { CyclesContext } from '../contexts/CyclesContext'
import { CreateCycleData } from '../interfaces/CreateCycleData'
import { Cycle } from '../interfaces/Cycle'

interface CyclesContextProviderProps {
  children: ReactNode
}

interface CyclesState {
  cycles: Cycle[]
  activeCycleId: string | null
}

export function CyclesContextProvider({
  children,
}: CyclesContextProviderProps) {
  const [cyclesState, dispatch] = useReducer(
    (state: CyclesState, action: any) => {
      if (action.type === 'ADD_NEW_CYCLE') {
        return {
          ...state,
          cycles: [...state.cycles, action.payload.newCycle],
          activeCycleId: action.payload.newCycle.id,
        }
      }

      if (action.type === 'INTERRUPT_CURRENT_CYCLE') {
        return {
          ...state,
          cycles: state.cycles.map((cycle) => {
            if (cycle.id === state.activeCycleId) {
              return { ...cycle, interruptedDate: new Date() }
            } else {
              return cycle
            }
          }),
          activeCycleId: null,
        }
      }

      return state
    },
    {
      cycles: [],
      activeCycleId: null,
    },
  )
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)
  const { activeCycleId, cycles } = cyclesState

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  function markCurrentCycleAsFinished() {
    dispatch({
      type: 'MARK_CURRENT_CYCLE_AS_FINISHED',
      payload: {
        activeCycleId,
      },
    })

    // const finishedCycles = (prevState: Cycle[]) =>
    //   prevState.map((cycle) => {
    //     if (cycle.id === activeCycleId) {
    //       return { ...cycle, finishedDate: new Date() }
    //     } else {
    //       return cycle
    //     }
    //   })

    // setCycles(finishedCycles)
  }

  function setSecondPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }

  function createNewCycle(data: CreateCycleData) {
    const cycleId = String(new Date().getTime())

    const newCycle: Cycle = {
      id: cycleId,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    dispatch({
      type: 'ADD_NEW_CYCLE',
      payload: {
        newCycle,
      },
    })

    // setCycles((prevState) => [...prevState, newCycle])
    setAmountSecondsPassed(0)
  }

  function interruptCycle() {
    dispatch({
      type: 'INTERRUPT_CURRENT_CYCLE',
      payload: {
        activeCycleId,
      },
    })
    // const interruptedCycles = (prevState: Cycle[]) =>
    //   prevState.map((cycle) => {
    //     if (cycle.id === activeCycleId) {
    //       return { ...cycle, interruptedDate: new Date() }
    //     } else {
    //       return cycle
    //     }
    //   })

    // setActiveCyclesId(null)
  }

  return (
    <CyclesContext.Provider
      value={{
        activeCycle,
        activeCycleId,
        markCurrentCycleAsFinished,
        amountSecondsPassed,
        setSecondPassed,
        interruptCycle,
        createNewCycle,
        cycles,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
