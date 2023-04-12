import { createContext } from 'react'
import { CreateCycleData } from '../interfaces/CreateCycleData'
import { Cycle } from '../interfaces/Cycle'

interface CycleContextType {
  cycles: Cycle[]
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  markCurrentCycleAsFinished: () => void
  amountSecondsPassed: number
  setSecondPassed: (seconds: number) => void
  interruptCycle: () => void
  createNewCycle: (data: CreateCycleData) => void
}

export const CyclesContext = createContext({} as CycleContextType)
