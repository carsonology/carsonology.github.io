import React from 'react'
import Icon from './Icon'

const Filters = (props) => {
    const { filters, setFilters, allFilters } = props

    const removeFilter = (f) => {
        let newFilters = []
        if (filters.includes(f)) {
            newFilters = filters.filter(g => g !== f)
        } else {
            newFilters = [...filters, f]
        }
        setFilters(newFilters)
    }

    const isolateFilter = (f) => {
        try {
            setFilters(filters.length <= 1 ? allFilters : [f])
        } catch {
            setFilters(allFilters)
        }
    }

    return (
        <div className="filters">
            <div className="filters-inner">

                {allFilters.map(f => {
                    return (
                        <button className={filters.includes(f) ? '' : 'disabled'}>
                            <p onClick={() => { isolateFilter(f) }}>{f}</p>
                            <div className="icon" onClick={() => { removeFilter(f) }}>
                                {filters.includes(f) && (
                                    <Icon name="x"
                                    />
                                )}
                                {!filters.includes(f) && (
                                    <Icon name="+"
                                    />
                                )}
                            </div>
                        </button>
                    )
                })}
            </div>
        </div>

    )

}

export default Filters