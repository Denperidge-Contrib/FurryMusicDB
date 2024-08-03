<template>
    <nav class="navbar navbar-expand-md" role="navigation" aria-label="main navigation">
        <div class="container">
            <a class="navbar-brand d-flex" href="/">
                <img src="/icon.svg" alt="Logo"/>
                <span class="logotype">
                    Furry Music<br>Database
                </span>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#headerNavbar" aria-controls="headerNavbar"
                    aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="headerNavbar">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="/about">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/artists">Musicians</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/labels">Labels</a>
                    </li>
                </ul>
                <ul class="navbar-nav">
                    <li class="nav-item" v-if="!isLoggedIn && !isLoading">
                        <a class="nav-link" href="/api/login">Sign In</a>
                    </li>
                    <li class="nav-item dropdown" v-if="isLoggedIn">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                           aria-expanded="false">
                            {{ user.name }}
                        </a>
                        <ul class="dropdown-menu">
                            <li v-if="isAdmin">
                                <a class="dropdown-item" href="/admin">Administration</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/profile">My Profile</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/api/logout">Sign Out</a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/help">Help</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/donate">Donate</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import {useUserStore} from "~/stores/user.ts";

const {
    isLoading,
    isLoggedIn,
    isAdmin,
    user
} = useUserStore();
</script>
