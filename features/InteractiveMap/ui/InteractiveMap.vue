<script setup lang="ts">
import { useCountryPointStore } from "~/entities/CountryPoint/store/countryPoint";
import { points } from "../config/points";
import "../style.scss";

const selectedPointId = ref<number | null>(null);
const hoveredPointId = ref<number | null>(null);

const { handleClick, handleMouseEnter, handleMouseLeave } = useCountryPointStore()
</script>
<template>
    <div class="interactiveMap">
        <svg 
            viewBox="0 0 75 20"
            preserveAspectRatio="xMidYMid meet"
        >
            <image 
                href="../../../public/assets/mapVectors.svg" 
                width="75" 
                height="20"
                preserveAspectRatio="xMidYMid meet"
            />
            <g 
                v-for="point in points" 
                :key="point.id" 
            >
                <Transition name="circleScale">
                    <circle
                        :cx="point.cx"
                        :cy="point.cy"
                        :r="hoveredPointId === point.id || selectedPointId ? 1 : 0.00001"
                        fill="#fff"
                        stroke="#00005C"
                        class="interactiveMap__point"
                        @mouseenter="handleMouseEnter(point.id)"
                        @mouseleave="handleMouseLeave"
                        @click="handleClick(point.id)"
                    />
                </Transition>
                <Transition name="textAppear">
                    <text  
                        class="interactiveMap__label"
                        :x="point.cx"
                        :y="point.cy - 1"
                        text-anchor="middle"
                    >
                        {{ point.name }}
                    </text>
                </Transition>
            </g>
        </svg>
    </div>
    
</template>
